import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { List } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { TopMenuProps } from '@/interfaces';

export function Menu({ scrollToRef }: TopMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <List size={40}></List>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-26">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Button
              onClick={() => scrollToRef('quemsomos')}
              variant={'outline'}
              className='text-black'
            >
              Sobre nós
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              onClick={() => scrollToRef('conectese')}
              variant={'outline'}
              className='text-black'
            >
              Escute a Rádio
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className='text-black' onClick={() => scrollToRef('sep')} variant={'outline'}>
              Equipe
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button className='text-black' onClick={() => scrollToRef('parceiros')} variant="outline">
              Notícias
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              onClick={() => scrollToRef('faleconosco')}
              variant={'outline'}
              className='text-black'
            >
                Peça uma Música
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
