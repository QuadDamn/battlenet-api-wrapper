export async function formatBattleTag(battleTag: string): Promise<string> {
    return battleTag.replace('#', '-');
}