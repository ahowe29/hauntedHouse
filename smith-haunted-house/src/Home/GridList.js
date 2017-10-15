import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Boo from '../assets/boo.jpg';
import Boo2 from '../assets/boo2.jpg';
import GhostCat from '../assets/ghost-cat.jpg';
import House from '../assets/house.jpeg';
import Spider from '../assets/spider.jpeg';
import Grid1 from '../assets/grid.jpg';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: Boo,
    title: 'Boo',
    author: 'jill111',
  },
  {
    img: Spider,
    title: 'spider',
    author: 'pashminu',
  },
  {
    img: GhostCat,
    title: 'ghost',
    author: 'Danson67',
  },
  {
    img: House,
    title: 'haunted house',
    author: 'fancycrave1',
  },
  {
    img: Boo2,
    title: 'boo',
    author: 'Hans',
    featured: true,
  },
  {
    img: Grid1,
    title: 'happy halloween',
    author: 'fancycravel',
    featured: true,
  },
  {
    img: Boo2,
    title: 'boo',
    author: 'jill111',
  },
  {
    img: GhostCat,
    title: 'ghost and cat',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class GridList1 extends Component {
  render() {
    return (

          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              <Subheader></Subheader>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  cols={tile.featured ? 2 : 1}
                  rows={tile.featured ? 3 : 1}
                >
                  <img src={tile.img} />
                </GridTile>
              ))}
            </GridList>
          </div>
          );
        }
  }

export default GridList1;
