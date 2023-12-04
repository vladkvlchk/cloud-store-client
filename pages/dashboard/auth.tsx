import { LoginForm } from "@/components/auth/LoginForm";
import { NextPage } from "next";
import Head from "next/head";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <LoginForm />
      </main>
    </>
  );
};

export default AuthPage;
