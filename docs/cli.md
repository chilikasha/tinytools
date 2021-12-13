# CLI

- [age](https://github.com/FiloSottile/age) - a simple, modern and secure file encryption tool, format, and Go library. <sub><sup>*[free | oss]*</sup></sub>

- [The Fuck](https://github.com/nvbn/thefuck) - open source app that corrects errors in previous console commands. <sub><sup>*[free | oss]*</sup></sub>
  ```bash
  ➜ apt-get install vim
  E: Could not open lock file /var/lib/dpkg/lock - open (13: Permission denied)
  E: Unable to lock the administration directory (/var/lib/dpkg/), are you root?

  ➜ fuck
  sudo apt-get install vim [enter/↑/↓/ctrl+c]
  [sudo] password for nvbn:
  Reading package lists... Done
  ...
  ```

- [Transfer.sh](https://transfer.sh) - a free service for sharing files right from the command line. <sub><sup>*[free | oss]*</sup></sub>
  ```bash
  # Upload with curl
  $ curl --upload-file ./hello.txt https://transfer.sh/hello.txt  
  # And get a link in response

  # Other options
  $ curl -H "Max-Downloads: 1" -H "Max-Days: 5" --upload-file ./hello.txt https://transfer.sh/hello.txt

  # Download the file 
  $ curl https://transfer.sh/66nb8/hello.txt -o hello.txt
  ```
