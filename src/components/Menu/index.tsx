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
            >
              Quem somos
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              onClick={() => scrollToRef('conectese')}
              variant={'outline'}
            >
              Conecte-se
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button onClick={() => scrollToRef('sep')} variant={'outline'}>
              Soluções e Produtos
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button onClick={() => scrollToRef('parceiros')} variant="outline">
              Clientes e Parceiros
            </Button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Button
              onClick={() => scrollToRef('faleconosco')}
              variant={'outline'}
            >
              Fale conosco
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
