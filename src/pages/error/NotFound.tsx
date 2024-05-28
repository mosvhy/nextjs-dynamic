import Meta from "@/components/Meta";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <Meta title="Not Found" description="Page Not Found" />
      <h1>Page Not Found</h1>
      <p>slug: {slug}</p>
    </div>
  );
}

export default NotFound;
