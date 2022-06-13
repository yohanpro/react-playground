import {
  ActionFunction,
  json,
  redirect,
  LoaderFunction,
} from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import { getPost, updatePost } from "~/models/post.server";
import type { Post } from "~/models/post.server";
import { marked } from "marked";
import { useLoaderData } from "@remix-run/react";
import { Form } from "@remix-run/react";
import { useState } from "react";

type LoaderData = { post: Post; html: string };

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, `params.slug is required`);
  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);
  const html = marked(post.markdown);
  return json<LoaderData>({ post, html });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");

  // get intial slug from url
  const initalslug = request.url.split("/").pop();

  invariant(initalslug, `initalslug is required`);
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");

  await updatePost(initalslug, { title, markdown, slug });
  return redirect(`/posts/${slug}`);
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
export default function PostSlug() {
  const { post } = useLoaderData<LoaderData>();

  const [formData, setFormData] = useState({
    title: post.title,
    slug: post.slug,
    markdown: post.markdown,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form method="patch">
      <p>
        <label>
          Post Title:{" "}
          <input
            type="text"
            name="title"
            className={inputClassName}
            value={formData.title}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          <input
            type="text"
            name="slug"
            className={inputClassName}
            value={formData.slug}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">Markdown:</label>

        <br />
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
          value={formData.markdown}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        >
          Patch Post
        </button>
      </p>
    </Form>
  );
}
