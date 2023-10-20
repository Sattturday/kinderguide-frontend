import './ShowList.scss';
import { Card } from '../common/Card';

export const ShowList = ({ selected }) => (
  <section className='show-list'>
    <Card selected={selected} />
    <Card />
    <Card />
    <Card />
    <Card />
  </section>
);
