import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import { Item, List } from './CheckList.style';

export interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
}

/** List with orange check-circle bullets. */
export function CheckList({ items, columns = 1 }: CheckListProps) {
  return (
    <List columns={columns}>
      {items.map((item) => (
        <Item key={item}>
          <CheckCircleOutlined aria-hidden />
          {item}
        </Item>
      ))}
    </List>
  );
}
