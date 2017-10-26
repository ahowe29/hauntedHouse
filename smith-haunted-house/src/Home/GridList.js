import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import walkway from '../assets/walkway.jpeg';
import skelly from '../assets/skelly.jpeg';
import dress from '../assets/green_dress.jpeg';
import rave from '../assets/rave.jpeg';
import jack from '../assets/jack.jpeg';
import jack2 from '../assets/jack2.jpeg';
import pumpkins from '../assets/day_pumpkins.jpeg';
import freakyLady from '../assets/freakyLady.jpeg';


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
    img: pumpkins,
    title: 'Boo',
    author: 'jill111',
  },
  {
    img: rave,
    title: 'spider',
    author: 'pashminu',
  },
  {
    img: dress,
    title: 'ghost',
    author: 'Danson67',
  },
  {
    img: jack,
    title: 'haunted house',
    author: 'fancycrave1',
  },
  {
    img: skelly,
    title: 'boo',
    author: 'Hans',
    featured: true,
  },
  {
    img: walkway,
    title: 'happy halloween',
    author: 'fancycravel',
    featured: true,
  },
  {
    img: freakyLady,
    title: 'boo',
    author: 'jill111',
  },
  {
    img: jack2,
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
                  cols={tile.featured ? 2 : 1}
                  rows={tile.featured ? 2 : 1}
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
