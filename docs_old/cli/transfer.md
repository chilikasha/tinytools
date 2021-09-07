---
title: transfer.sh
description: Easily share encrypted files from the command line.
---

[**transfer.sh**](https://transfer.sh) is a free service for sharing files right from the command line. It lets you encrypt files, 
scan them for malware, upload several files at once, limit downloads or set the number of days before deletion.

Other useful examples of usage can be found [here](https://github.com/dutchcoders/transfer.sh/blob/master/examples.md).

```bash
# Upload with curl
$ curl --upload-file ./hello.txt https://transfer.sh/hello.txt  
# And get a link in response

# Other options
$ curl -H "Max-Downloads: 1" -H "Max-Days: 5" --upload-file ./hello.txt https://transfer.sh/hello.txt

# Download the file 
$ curl https://transfer.sh/66nb8/hello.txt -o hello.txt
```
