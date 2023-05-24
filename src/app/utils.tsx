import { choose, fetchFileContents } from "choose-for-me";

export async function getTagline(): Promise<string> {
    const day = getHumorousDayName()
    const taglines = await fetchFileContents(process.env.REACT_APP_TAGLINES_URL!);
    const tagline = choose(taglines, '\n');
    if (day == 'Hope you\'re not working today...') {
        return day;
    } else {
        return tagline.replace("%DAY%", day);
    }
}

export function getHumorousDayName(): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
    const dayName = date.toLocaleDateString(undefined, options);
    switch (dayName) {
        case 'Monday':
            return 'Munchday';
        case 'Tuesday':
            return 'Tunchday';
        case 'Wednesday':
            return 'Catalina day';
        case 'Thursday':
            return 'Thunchday';
        case 'Friday':
            return "Fryday";
        default:
            return 'Hope you\'re not working today...';
    }
}

export async function getDecision(): Promise<Map<string, string>> {
    let res: Map<string, string> = new Map<string, string>();
    let choices: string = await fetchFileContents(process.env.REACT_APP_CHOICES_URL!);
    const wooliesChoices: string = await fetchFileContents(process.env.REACT_APP_CHOICES_WOOLIES_URL!);
    choices = choices + '\n' + wooliesChoices
    res.set('standard', choose(choices, '\n'));
    if (!wooliesChoices.includes(res.get('standard')!)) {
        res.set('woolies', choose(wooliesChoices, '\n'));
    }
    return res;
}