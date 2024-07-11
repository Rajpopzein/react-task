import React from "react";
import { FixedSizeList as VirtualizedList } from 'react-window';

const ListItem = React.memo(({ index, style }) => {
  console.log('Rendering item:', index);
  return <div style={style}>{`Item ${index + 1}`}</div>;
});

const List = React.memo(({ items }) => {
    return (
      <VirtualizedList
        height={600}
        itemCount={items.length}
        itemSize={35}
        width={300}
      >
        {({ index, style }) => <ListItem index={index} style={style} />}
      </VirtualizedList>
    );
  });

export default List