import React, { useState } from "react";
import PostSubTitle from "../components/post-sub-title";

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        name: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const text = await res.text();
    handleResponse(res.status, text);
  };

  return (
    <section className="text-gray-700 body-font relative">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col text-center w-full mb-6">
          <PostSubTitle>Kontaktformular</PostSubTitle>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Name"
                  onChange={handleOnChange}
                  required
                  value={inputs.name}
                />
              </div>
              <div className="p-2 w-1/2">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-green-500 text-base px-4 py-2"
                  placeholder="Email"
                  onChange={handleOnChange}
                  required
                  value={inputs.email}
                />
              </div>
              <div className="p-2 w-full">
                <label htmlFor="message">Nachricht</label>
                <textarea
                  id="message"
                  className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none h-48 focus:border-green-500 text-base px-4 py-2 resize-none block"
                  placeholder="Nachricht"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                />
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="flex mx-auto text-black bg-customGreen border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  {!status.submitting
                    ? !status.submitted
                      ? "Abschicken"
                      : "Abgeschicht!"
                    : "Warten..."}
                </button>
              </div>
            </div>
          </form>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <div className="success">{status.info.msg}</div>
          )}
          <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <p className="leading-normal my-5">
              Claudia Kliem-Petropoulou
              <br />
              Tourles, GR-24100 Kalamata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};