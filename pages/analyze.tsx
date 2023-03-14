import { serverAuthentication } from "@/lib/auth/server-authentication";

const analyze = (props: any) => {
  console.log("props");
  console.log(props);
  return <>Analyze 페이지</>;
};

export default analyze;

export const getServerSideProps = serverAuthentication((context: any) => {
  const { token } = context.query;
  console.log("context.cookie");
  console.log(context.cookies);
  console.log(context.req.cookies);
  console.log(context.req.cookies["token"]);
  console.log(context.req.cookies["token"]);
  console.log(context.req.cookies["token"]);
  console.log(context.req.cookies["token"]);
  //   console.dir(context);
  const cookie = context.req ? context.req.headers.cookie : "";
  console.log(cookie);
  console.log(cookie);
  console.log(cookie);
  console.log(typeof cookie);

  return {
    props: {
      token: token ?? "없다",
    },
  };
});
