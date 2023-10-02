import { useState } from "react";
import "./App.css";

import Paginateddata from "./Paginateddata";

function App() {
  return (
    <>
      <table className="ml-[100px]">
        <tr className="border-2 border-black">
          <th className="border-2 border-black">id</th>
          <th className="border-2 border-black">name</th>
        </tr>
        <tbody className="border-2 border-black">
          <Paginateddata itemPerPage={10} />
          {/* {count.map((e) => {
            return (
              <>
                <tr>
                  <td className="border-2 border-black">
                    {e.id}
                  </td>
                  <td className="border-2 border-black">
                    {e.title}
                  </td>
                </tr>
              </>
            );
          })} */}
        </tbody>
      </table>
    </>
  );
}

export default App;
