/*
 * Copyright (C) XTLE contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import React from "react";

import CheckboxTable from "@phlax/react-checkbox-table";

import ChannelsUI from "@chango/ui";


export class UserProjectsFieldset extends React.PureComponent {
    static contextType = ChannelsUI.Context;

    render () {
        const items = [["item1"]];
        return (
            <CheckboxTable
              data={(items || [])}
              columns={this.context.getColumns(["name"])} />);

    }
}
