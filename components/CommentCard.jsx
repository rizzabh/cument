"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const CommentCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm font-normal text-gray-400">
              {post.creator.email}
            </p>
            <p className="my-4 text-sm glassmorphism">{post.prompt}</p>
            <p className="text-sm blue_gradient">{post.tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
