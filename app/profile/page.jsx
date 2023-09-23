"use client";
import { useState, useEffect } from "react";
import { UseSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const MyProfile = () => {
  const { data: session } = useSession();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setposts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, []);
  const handleDelete = async () => {};
  const handleEdit = () => {};
  return (
    <Profile
      name="My"
      desc="All of your comments you posted"
      data={post}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
