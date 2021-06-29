import React from "react";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="text-4xl font-bold bg-blue-300 text-indigo-800 text-center py-8 border-t-8 border-b-8 border-indigo-500">
        Tailwind CSS Header
      </h1>
      <div className="h-auto w-screen bg-indigo-200 flex flex-col items-center">
        <h3 className="text-center text-6xl py-16">Main Content Heading</h3>
        <p className="text-center mb-20 text-3xl pb-8 w-2/3 bg-indigo-700 text-gray-200 pt-4 shadow-2xl rounded-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus itaque eveniet quam facilis dicta? Eveniet rerum,
          distinctio minus unde voluptatibus illum porro doloribus sed
          accusamus! Omnis eos harum quisquam praesentium, veniam doloremque
          temporibus dignissimos amet ratione, eius nam eligendi quis recusandae
          optio. At saepe quaerat, eius consequuntur eveniet ex nobis!
        </p>
      </div>
      <footer className="mt-0 bg-blue-200 text-blue-800 text-xl text-center font-bold pt-4 pb-8 border border-t-8 border-blue-800 overflow-hidden">
        Coded by Shirjeel Khalil Fahid 2021
      </footer>
    </React.Fragment>
  );
};

export default App;
