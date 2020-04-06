# -*- coding: utf-8 -*-
#
# Copyright (C) Xtle contributors.
#
# This file is a part of the Xtle project. It is distributed under the GPL3
# or later license. See the LICENSE file for a copy of the license and the
# AUTHORS file for copyright and authorship information.

from xtle.fs.management.commands import FSAPISubCommand


class SyncCommand(FSAPISubCommand):
    help = "Sync translations from FS into Xtle."
    api_method = "sync"
