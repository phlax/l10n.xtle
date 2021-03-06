/*
 * Copyright (C) XTLE contributors.
 *
 * This file is a part of the Pootle project. It is distributed under the GPL3
 * or later license. See the LICENSE file for a copy of the license and the
 * AUTHORS file for copyright and authorship information.
 */


export const reduceLanguages = (data, settings, __schema__) => {
    const {"xtle.admin.languages": languages} = data;
    const _languages = [];

    for (let language of languages || []) {
        const item = {};
        let i = 0;
        for (let schema of __schema__["xtle.admin.languages"]) {
            item[schema] = language[i];
            i++;
        }
	item["name"] = settings["xtle.languages.site"][item["code"]];
        _languages.push(item);
    }
    return {"xtle.admin.languages": _languages};
};
