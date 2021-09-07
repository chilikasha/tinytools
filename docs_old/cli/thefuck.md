---
title: The Fuck
description: Save time with an app that corrects errors in previous console commands.
---

[**The Fuck**](https://github.com/nvbn/thefuck) is a magnificent open-source app that corrects errors in previous console commands.

Example:

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
