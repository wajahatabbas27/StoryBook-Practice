import React from 'react';

export default function Hello({name}) {
    return (
        <p>Hello {name}!, this is a simple hello world component.</p>
    )
}

export function IsLoading({loading}) {
    if (loading) {
        return (
            <p>Currently loading, please hold on.</p>
        )
    }
    return (
        <p>Here's your content</p>
    )
}
