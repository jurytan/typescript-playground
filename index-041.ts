// you can nest interfaces like this
interface Directory {
    addFile: (name: string) => void;
    config: Config;
  }
  
  interface Config {
    default: DefaultConfig;
  }
  
  interface DefaultConfig {
    encoding: string;
    permissions: string;
  }
  
  class DesktopDirectory2 implements Directory {
    config = {
      default: {
        encoding: 'utf-8',
        permissions: 'drw-rw-rw-',
      }
    }
  
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop2 = new DesktopDirectory2();
  
  console.log(Desktop2.config);