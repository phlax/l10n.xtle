/*
 * Copyright (C) XTLE contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */

import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import {injectIntl, defineMessages} from "react-intl";

import {Form} from "reactstrap";

import ChannelsUI from "@chango/ui";

import {UserProjectsFieldset} from "./projects";


const translation = defineMessages({
    users: {
        id: "admin.project.users",
        defaultMessage: "Project users"
    },
});


export class BaseUserProjectsAdmin extends React.PureComponent {
    static propTypes = exact({
        intl: PropTypes.object.isRequired,
    });

    get fieldsetOptions () {
        return {
            className: "bg-light p-2",
            legend: {
                className: "col-form-label px-3 bg-white"}};
    }

    get fieldsets () {
        const {intl} = this.props;
        const {formatMessage} = intl;
        return [
            [formatMessage(translation.users),
             <UserProjectsFieldset key={2} />]];
    }

    render () {
        return (
            <Form>
              <ChannelsUI.forms.Fieldsets
                fieldsetOptions={this.fieldsetOptions}
                fieldsets={this.fieldsets} />
            </Form>
        );
    }
}


export const UserProjectsAdmin = injectIntl(BaseUserProjectsAdmin);
