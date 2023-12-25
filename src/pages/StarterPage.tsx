import { FaGithub } from "react-icons/fa";
import useApiHook from "../components/context/useApiHook";

function StarterPage() {
  const { token, setToken } = useApiHook();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = e.currentTarget.token.value;
    setToken(token);
  };
  const handleLogout = () => {
    setToken("");
  };

  return !token ? (
    <div className="flex flex-1 flex-col justify-center items-center text-[white] bg-[#0d1117]">
      <h1 className="flex text-6xl font-semibold mb-4 text-center opacity-60">
        <FaGithub />
        Profile Viewer
      </h1>
      <p className="text-2xl text-center mb-8">
        Enter your GitHub personal access token (PAT) below to get started:
      </p>
      <form
        className="w-full flex justify-center items-center mb-2 space-x-4"
        onSubmit={handleSubmit}
      >
        <input
          type="password"
          id="token"
          name="token"
          placeholder="Enter PAT token"
          required
          className="border-[#727a85] text-base text-[#727a85] py-2 px-4 rounded-md bg-opacity-20 border-2 w-full max-w-xs bg-[rgba(255,255,255,0.05)]"
        />
        <button
          type="submit"
          className="py-2 px-4 text-base rounded-md bg-green-600 text-white cursor-pointer transition-colors duration-200 hover:bg-green-700"
        >
          Submit
        </button>
      </form>
      <div className="p-4 mt-4 bg-opacity-20 border-2 rounded-md border-[#727a85] text-base text-[#727a85]">
        <p className="text-center mb-4">
          Don&apos;t have a GitHub PAT? Follow these instructions to generate
          one:
        </p>
        <ol className="text-lg ml-4">
          <li className="mb-2">
            Go to your GitHub settings page and click on{" "}
            <strong className="underline">Developer settings</strong> in the
            sidebar.
          </li>
          <li className="mb-2">
            Click on{" "}
            <strong className="underline">Personal access tokens</strong> in the
            sidebar, then click the{" "}
            <strong className="underline">Generate new token</strong> button.
          </li>
          <li className="mb-2">
            Give your token a name and select the <code>user</code> and{" "}
            <code>repo</code> scopes.
          </li>
          <li className="mb-2">
            Click the <strong className="underline">Generate token</strong>{" "}
            button, then copy the token to your clipboard.
          </li>
        </ol>
      </div>
    </div>
  ) : (
    <div className="flex w-full flex-col justify-center items-center text-white bg-[#0d1117]">
      <h1 className="flex sm:text-6xl font-semibold mb-4 text-center opacity-60">
        <FaGithub />
        Profile Viewer
      </h1>
      <p className="w-1/2  sm:text-xl rounded-md text-center text-[#727a85] mb-8 border-2 border-[#727a85] p-5 bg-[rgba(255,255,255,.01)]">
        Search by the username of a GitHub user to view their profile and public
        repositories.  You can also view your own profile and repositories
        by searching for your own username.
        To logout, click the button below.
      </p>
      <button
        className="py-2 px-4 text-base rounded-md bg-red-600 text-white cursor-pointer transition-colors duration-200 hover:bg-red-700"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default StarterPage;
