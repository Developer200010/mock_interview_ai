import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/action/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      <Agent userName="you" type="generate" userId="id" />
    </>
  );
};

export default Page;