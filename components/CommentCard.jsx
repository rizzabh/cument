"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
const CommentCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className="flex items-start">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <h3 className="font-inter font-semibold text-gray-900">
              Anonymous
            </h3>
            <p className="font-inter text-sm font-normal text-gray-400">
              wontreveal@email.com
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
