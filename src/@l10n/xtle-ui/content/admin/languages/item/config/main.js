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

import ChannelsUI from "@chango/ui";

import {LanguageSettingsFieldset} from "./settings";


const translation = defineMessages({
    projectSettings: {
        id: "admin.project.settings",
        defaultMessage: "Project settings"
    },
});


export class BaseLanguageConfig extends React.PureComponent {
    static propTypes = exact({
        intl: PropTypes.object.isRequired,
    });

    get fieldsets () {
        const {intl} = this.props;
        const {formatMessage} = intl;
        return [
            [formatMessage(translation.projectSettings),
             <LanguageSettingsFieldset key={0} />]];
    }

    render () {
        return (
            <ChannelsUI.forms.Fieldsets
              fieldsets={this.fieldsets} />
	);
    }
}


export const LanguageConfig = injectIntl(BaseLanguageConfig);
