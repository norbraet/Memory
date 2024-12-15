module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-empty': [2, 'never'],
        'scope-case': [2, 'always', ['lower-case']],
        'scope-pattern': [2, 'always', /^(frontend|backend)$/],
        'type-enum': [
            2, 'always', 
            [
                'feat', 
                'fix', 
                'build', 
                'chore', 
                'style', 
                'refactor', 
                'test',
                'perf'
            ]
        ]
    }
}