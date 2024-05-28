interface Page {
  id: number;
  title: string;
  slug: string;
  content?: string;
}

interface PageListProps {
  pages: Page[];
}

interface Section {
  id: number;
  type: string;
  title: string;
  description: string;
  background: string;
  images: string;
}

interface PageContent {
  title: string;
  description: string;
  sections: Section[];
}

interface PageProps {
  pageContent: PageContent;
}

interface MetaProps {
  title: string;
  description: string;
}
