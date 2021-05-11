import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  href: string;
  children: any;
};

const defaultProps = {
  activeClassName: "text-green font-600",
};

export default function ActiveLink({ href, children }: Props) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={router.pathname === href ? "bg-gray-900 rounded-md" : ""}>
        {children}
      </a>
    </Link>
  );
}
