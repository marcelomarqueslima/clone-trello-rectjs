import React from 'react';
import TrelloList from'./TrellhoList';
import { connect } from 'react-redux';

function App() {
  const { lists } = this.props;
  return (
    <div className="App">
      <h2>Hello world!</h2>
      {lists.map(list => <TrelloList title={lists.title} cards={lists.cards}/>)}
    </div>
  );
}


const mapStateToProps = state => ({
  lists: state.list
})

export default connect (mapStateToProps) (App);
