import { revalidatePath } from "next/cache";

export const forceRevalidate = (request) => {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
};
