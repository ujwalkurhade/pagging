import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function Paginateddata({ itemPerPage }) {
  const [data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemPerPage;
  console.log(endOffset);
  const currentData = data.slice(itemOffset, endOffset);
  console.log(currentData);
  const pageCount = Math.ceil(data.length / itemPerPage);
  console.log(pageCount);

  const handleClick = (e) => {
    const newOffset =
      (e.selected * itemPerPage) % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      {currentData &&
        currentData.map((e) => {
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
        })}

      <ReactPaginate
        className="flex gap-2"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Paginateddata;
