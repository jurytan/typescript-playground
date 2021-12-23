// You can use interfaces similar like Java to give structure to classes
// Write an interface here
interface Directory {
    addFile: (name: string) => void;
  }
  
// This is how you can make a class
  class DesktopDirectory implements Directory {
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop = new DesktopDirectory();
  
  Desktop.addFile('lesson-notes.txt');
  Desktop.showPreview('lesson-notes.txt');