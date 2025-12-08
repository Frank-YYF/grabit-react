import { Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { ProductContentType } from "@/types/data.types";
import Spinner from "../button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const FashionProductItem = ({
  statekey,
  hasPaginate = false,
}: ProductContentType) => {
  const { data, error } = useSliceData(statekey);

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <>
      {getData()?.map((item: any, index: number) => (
        <Col
          key={index}
          md={4}
          sm={6}
          xs={12}
          className="gi-col-5 gi-product-box"
        >
          <ItemCard data={item} />
        </Col>
      ))}
    </>
  );
};

export default FashionProductItem;
