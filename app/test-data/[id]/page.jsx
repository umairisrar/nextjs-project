"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  return (
    <div>
      UserProfile id UserProfile {userName} params value {params.id}
    </div>
  );
};

export default UserProfile;
