export const forceRevalidate = (request) => {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
};
