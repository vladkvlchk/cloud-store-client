import axios from "@/core/axios";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import * as Api from "@/api";

const DashboardPage: NextPage = () => {
  return (
    <main>
      <h1>Dashboard Private</h1>
    </main>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { _token } = nookies.get();
  console.warn('token: ', _token);

  axios.defaults.headers.Authorization = "Bearer " + _token;

  try {
    await Api.auth.getMe();

    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/dashboard/auth",
        permanent: false,
      },
    };
  }
};

export default DashboardPage;
