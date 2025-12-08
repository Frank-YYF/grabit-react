import { Col } from "react-bootstrap";
import ItemCard from "../../product-item/ItemCard";
import { ProductContentType } from "@/types/data.types";
import Spinner from "@/components/button/Spinner";
import { useSliceData } from "@/hooks/useSliceData";

const ProductItem = ({
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
          xl={3}
          lg={4}
          sm={6}
          xs={12}
          className="gi-product-box"
        >
            <ItemCard data={item} />
        </Col>
      ))}
    </>
  );
};

export default ProductItem;
