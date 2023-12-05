import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Tabs } from "antd";
import { NextPage } from "next";
import Head from "next/head";

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / Auth</title>
      </Head>
      <main style={{ width: 400, margin: "50px auto" }}>
        <Tabs
          items={[
            {
              label: "Log in",
              key: "1",
              children: <LoginForm />,
            },
            {
              label: "Sign up",
              key: "2",
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
