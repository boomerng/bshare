import { getBoardGames } from '../../api/DataApi';
import { data } from '../../../data';

describe('DataApi', () => {
  it('exposes getBoardGames as an array', () => {
    const games = getBoardGames();
    const gameId = data[0].gameId;
    const gameName = data[0].name;
    
    expect(games.length).not.toBe(0);
    expect(games[0]).toHaveProperty("gameId", gameId);
    expect(games[0]).toHaveProperty("name", gameName);
  });
});