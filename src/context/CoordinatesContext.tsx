import React from 'react';
import Coordinate from '../interfaces/Coordinate';
import CoordinateResponse from '../interfaces/CoordinateResponse';

interface CoordinateContextData {
  setSelectedLine: (value: CoordinateResponse) => void;
  setCoordinates: (coords: Coordinate[]) => void;
  selectedLine: CoordinateResponse | null;
  coordinates: Coordinate[]
}

const CoordinatesContext = React.createContext<CoordinateContextData>({
  setSelectedLine: () => {},
  setCoordinates: () => {},
  selectedLine: null,
  coordinates: []
});

export function CoordinatesProvider({ children }: { children: React.ReactNode }) {
  const [selectedLine, setSelectedLine] = React.useState<CoordinateResponse | null>(null);
  const [coordinates, setCoordinates] = React.useState<Coordinate[]>([]);

  const contextValue = React.useMemo(() => {
    return {
      setSelectedLine,
      setCoordinates,
      selectedLine,
      coordinates
    };
  }, [setSelectedLine, setCoordinates, coordinates, selectedLine]);

  return <CoordinatesContext.Provider value={contextValue}>{children}</CoordinatesContext.Provider>;
}

export function useCoordinatesContext() {
  return React.useContext(CoordinatesContext);
}
