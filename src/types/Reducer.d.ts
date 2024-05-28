interface Action {
  type: string;
  payload?: any;
}

interface PagesState {
  pages: Page[];
  loading: boolean;
  loaded: boolean;
  error: string | null;
}