/*
 * Copyright (C) XTLE contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import React from "react";

import {Breadcrumbs} from "@l10n/xtle-ui/breadcrumbs";
import {TranslateToolbar} from "./toolbar";


export class TranslateControls extends React.PureComponent {

    render () {
        return (
            <>
              <Breadcrumbs {...this.props} />
              <TranslateToolbar {...this.props} />
            </>);
    }
}