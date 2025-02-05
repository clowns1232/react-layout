import styled from "styled-components";
import { LIMIT } from "../../constants/pagination";
import { Pagination as IPagination } from "../../models/pageination.model";
import Button from "../common/Button";
import ConditionalRenderer from "../common/ConditionalRenderer";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

interface Props {
  pagination: IPagination;
}
const Pagination = ({ pagination }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { currentPage, totalCount } = pagination;
  const pages: number = Math.ceil(totalCount / LIMIT);

  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.PAGE, page.toString());
    setSearchParams(newSearchParams);
  };
  return (
    <PaginationStyle>
      <ConditionalRenderer
        condition={pages > 0}
        trueComponent={
          <ol>
            {Array(pages)
              .fill(0)
              .map((_, index) => {
                return (
                  <li>
                    <Button
                      size="small"
                      scheme={index + 1 === currentPage ? "primary" : "normal"}
                      onClick={() => handleClickPage(index + 1)}
                      key={index}
                    >
                      {index + 1}
                    </Button>
                  </li>
                );
              })}
          </ol>
        }
      />
    </PaginationStyle>
  );
};

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;
  ol {
    list-style: none;
    display: flex;
    gap: 8px;
    padding: 0;
    margin: 0;
  }
`;

export default Pagination;
