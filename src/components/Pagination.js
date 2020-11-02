import React from "react";

const Pagination = ({ length, currentPag, setCurrentPag }) => {
  let pagItems = [];
  for (let i = 1; i <= length; i++) {
    pagItems.push(
      <li className={i-1==currentPag ? ("page-item active") : ("page-item")} onClick={() => setCurrentPag(i - 1)}>
        <a className="page-link" href="#">
          {i}
        </a>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => currentPag !== 0 && setCurrentPag(currentPag - 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">{`<`}</span>
          </a>
        </li>
        {pagItems}
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" onClick={() => currentPag < length-1 && setCurrentPag(currentPag + 1)}>
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">{`>`}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
