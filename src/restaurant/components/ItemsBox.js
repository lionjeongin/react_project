import React from 'react';
import styled from 'styled-components';
import { ImageBox } from '../../commons/components/ImageBox';

const ItemBox = ({ item, className }) => {
  const { images, rstrNm, rstrIntrcnCont } = item;
  return (
    <li className={className}>
      {images && images.length > 0 && (
        <div className="photo">
          <img src={images[0].rstrImgUrl} alt={rstrNm} />
        </div>
      )}
      <div className="title">{rstrNm}</div>
      <div className="description">{rstrIntrcnCont}</div>
    </li>
  );
};

const ItemStyledBox = styled(ItemBox)`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 5px #818181;
  border-radius: 5px;

  a {
    display: flex;

    .photo {
      margin-right: 10px;
      border-radius: 5px;
    }

    .item-content {
      width: calc(100% - 160px);
      word-break: break-all;
    }
  }
`;

const ItemsBox = ({ items }) => {
  return (
    items && (
      <ul>
        {items.map((item) => (
          <ItemBox key={item.rstrId} item={item} />
        ))}
      </ul>
    )
  );
};

export default React.memo(ItemsBox);