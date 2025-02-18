export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('reduxState');
      if (serializedState === null) {
        return {}
      }
      return JSON.parse(serializedState)||{};
    } catch (error) {
      console.error('Failed to load state from localStorage:', error);
      return {};
    }
  };
  
  export const saveState = (state:any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('reduxState', serializedState);
    } catch (error) {
      console.error('Failed to save state to localStorage:', error);
    }
  };