import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import New from './pages/New.js';
import Diary from './pages/Diary.js';
import Edit from './pages/Edit.js';
import React, { useEffect, useReducer, useRef, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      return [action.data, ...state];
    }
    case 'UPDATE': {
      return state.map((it) =>
        String(it.id) === String(action.data.id) ? { ...action.data } : it
      );
    }
    case 'DELETE': {
      return state.filter((it) => String(it.id) !== String(action.targetId));
    }
    default: {
      console.log('reducer warning: default type');
      return state;
    }
  }
}

const mockData = [
  {
    id: 'mock1',
    date: new Date().getTime(),
    content: 'mock1',
    emotionId: 1,
  },
  {
    id: 'mock2',
    date: new Date().getTime(),
    content: 'mock2',
    emotionId: 2,
  },
  {
    id: 'mock3',
    date: new Date().getTime(),
    content: 'mock3',
    emotionId: 3,
  },
  {
    id: 'mock4',
    date: new Date().getTime(),
    content: 'mock4',
    emotionId: 4,
  },
  {
    id: 'mock5',
    date: new Date().getTime(),
    content: 'mock5',
    emotionId: 5,
  },
];

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: 'INIT',
      data: mockData,
    });
    console.log(data);
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id: targetId,
        date: new date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId,
    });
  };
  if (!isDataLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
